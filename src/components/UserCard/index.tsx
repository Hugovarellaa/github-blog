/* eslint-disable @next/next/no-img-element */
import { FaBuilding, FaExternalLinkAlt, FaGithub, FaUserFriends } from 'react-icons/fa';
import { Layout } from "../Layout";
import { Avatar, UserCardContainer, UserCardContent, UserCardInfo, UserCardNameContainer } from "./styles";

interface User {
  login: string;
  user: string;
  bio: string;
  company: string;
  following: number;
  url: string;
  photo: string;
}

interface Props {
  user: User
}


export function UserCard({ user }: Props) {



  return (
    <Layout>
      <UserCardContainer>
        <Avatar src={user.photo} alt="Foto do Github" />

        <UserCardContent>
          <UserCardNameContainer>
            <h2>{user.user}</h2>
            <a target="_blank" href={user.url} rel="noreferrer" >
              GITHUB
              <FaExternalLinkAlt color='#3294f8' size={12} />
            </a>
          </UserCardNameContainer>

          <p>{user.bio}</p>

          <UserCardInfo>
            <span>
              <FaGithub size={18} color='#3A536B' />
              {user.login}
            </span>
            <span>
              <FaBuilding />
              {user.company}
            </span>
            <span>
              <FaUserFriends />
              {user.following} seguidores
            </span>
          </UserCardInfo>
        </UserCardContent>


      </UserCardContainer>
    </Layout >
  )
}