import Link from 'next/link';

function Index({ stars, name, url }) {
  return (
    <div>
      <p>python-workspace has {stars} ⭐️</p>
      <Link href={`${url}`}>
        {name}
      </Link>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://api.github.com/repos/acio-o9/python-workspace')
  const json = await res.json()
  return {
    props: {
      stars: json.stargazers_count,
      name: json.name,
      url: json.html_url
    },
  }
}

export default Index
