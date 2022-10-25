import type { GetStaticProps } from 'next'
import { Header } from '../components/Header'
import { UserCard } from '../components/UserCard'

export default function Home() {
  return (
    <div>
      <Header />
      <UserCard />
    </div>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 60 * 60 * 24 //24 Hours
  }
}