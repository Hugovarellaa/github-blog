import axios from 'axios';
import type { GetStaticProps } from 'next';
import { Header } from '../components/Header';
import { UserCard } from '../components/UserCard';

interface User {
  login: string;
  user: string;
  bio: string;
  company: string;
  following: number;
  url: string;
  photo: string;
}

interface HomeProps {
  user: User
}

export default function Home({ user }: HomeProps) {

  return (
    <div>
      <Header />
      <UserCard user={user} />
    </div>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  const { data } = await axios.get('https://api.github.com/users/Hugovarellaa');

  const user = {
    login: data.login,
    user: data.name,
    bio: data.bio,
    company: data.company,
    following: data.following,
    url: data.html_url,
    photo: data.avatar_url
  }


  return {
    props: { user },
    revalidate: 60 * 60 * 24 //24 Hours
  }
}