/* eslint-disable @next/next/no-img-element */
import { FaBuilding, FaExternalLinkAlt, FaGithub, FaUserFriends } from 'react-icons/fa';
import { Layout } from "../Layout";
import { Avatar, UserCardContainer, UserCardContent, UserCardInfo, UserCardNameContainer } from "./styles";

export function UserCard() {



  return (
    <Layout>
      <UserCardContainer>
        <Avatar src="https://github.com/Hugovarellaa.png" alt="Foto do Github" />

        <UserCardContent>
          <UserCardNameContainer>
            <h2>Hugo Alves Varella</h2>
            <a target="_blank" href="https://github.com/Hugovarellaa.png" rel="noreferrer" >
              GITHUB
              <FaExternalLinkAlt color='#3294f8' size={12} />
            </a>
          </UserCardNameContainer>

          <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>

          <UserCardInfo>
            <span>
              <FaGithub size={18} color='#3A536B' />
              cameronwll
            </span>
            <span>
              <FaBuilding />
              Rocketseat
            </span>
            <span>
              <FaUserFriends />
              32 seguidores
            </span>
          </UserCardInfo>
        </UserCardContent>


      </UserCardContainer>
    </Layout >
  )
}