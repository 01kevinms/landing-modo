import { useEffect, useState } from "react"

function BlogSection() {
  const [posts, setPosts] = useState([])
  const [feedImage, setFeedImage] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const url = "https://rss.nytimes.com/services/xml/rss/nyt/FashionandStyle.xml"

    async function fetchRSS() {
      try {
        const response = await fetch(url)
        const text = await response.text()

        const parser = new DOMParser()
        const xml = parser.parseFromString(text, "text/xml")

        // Pega o <image> do feed (logo principal)
        const imageTag = xml.querySelector("image > url")
        if (imageTag) {
          setFeedImage(imageTag.textContent)
        }

        // Extrai as notícias
        const items = xml.querySelectorAll("item")
        const parsed = Array.from(items).slice(9,12).map((item) => {
          const mediaContent = item.querySelector("media\\:content, content") // pega <media:content>
          const mediaUrl = mediaContent?.getAttribute("url")

          return {
            title: item.querySelector("title")?.textContent,
            link: item.querySelector("link")?.textContent,
            description: item.querySelector("description")?.textContent,
            pubDate: item.querySelector("pubDate")?.textContent,
            image: mediaUrl || null,
          }
        })

        setPosts(parsed)
      } catch (error) {
        console.error("Erro ao carregar RSS:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchRSS()
  }, [])

  return (
    <section className="bg-white my-6 py-10 px-6">
      {/* Cabeçalho do blog */}
      <div className="text-center mb-8">
        {feedImage && (
          <img
            src={feedImage}
            alt="NYT Fashion Logo"
            className="mx-auto mb-4 h-12 object-contain"
          />
        )}
        <h2 className="text-2xl font-bold text-gray-800">
          📰 Notícias de Moda — The New York Times
        </h2>
      </div>

      {/* Conteúdo */}
      {loading
       ? (
        <p className="text-center text-gray-500">Carregando notícias...</p>
      ) : (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {posts.map((post, i) => (
            <div
              key={i}
              className="bg-[#F2F2F2] rounded-2xl shadow hover:shadow-lg transition duration-300 overflow-hidden"
            >
              {post.image && (
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
                <p
                  className="text-sm text-gray-600 mb-3"
                  dangerouslySetInnerHTML={{
                    __html: post.description || "Clique para saber mais.",
                  }}
                />
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2675EA] font-medium hover:underline"
                >
                  Ler mais →
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default BlogSection
