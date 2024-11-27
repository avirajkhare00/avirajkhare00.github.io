import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        avirajkhare00
      </h1>
      <p className="mb-4">
        {`I love to work on Site Reliability and Infrastructure.
          Find my projects on GitHub.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
