import { ContainerImg } from "@/components";
import { useAuth0, User } from "@auth0/auth0-react";
import { AuthButton } from ".";
import pokebola from "../../../public/pokebola.gif";
import { ContainerProfile } from "./ProfileCss";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0<User>();

  console.log("soy user:", user);

  // if (isLoading) {
  //   return (
  //     <ContainerImg>
  //       <img src={pokebola} alt="loading.." />
  //     </ContainerImg>
  //   );
  // }

  return (
    <ContainerProfile>
      {isAuthenticated && (
        <div>
          <img src={user?.picture} alt={user?.name} />
          <h2>{user?.name}</h2>
          <p>{user?.email}</p>
        </div>
      )}
      <AuthButton />
    </ContainerProfile>
  );
};

export default Profile;
