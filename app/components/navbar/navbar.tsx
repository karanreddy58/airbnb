import Container from "../Container";
import Logo from "./logo";
import Search from "./Search";
import UserMenu from "./userMenu";
import { SafeUser } from "@/app/types";

interface NavbarProps{
    currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({
    currentUser
})=>{
    console.log({currentUser});
    return (
        <div className= "fixed w-full bg-white z-10 shadow-md"> 
        <div 
            className="
            py-4
            border-b-[1px]">
  
        <Container>
            <div
                className="
                flex
                flex-row
                items-center
                justify-between
                gap-3
                md:gap-0
                ">
                <Logo />
                <Search />
                <UserMenu currentUser = {currentUser} />
            </div>
        </Container>
        </div>
        </div>
    )
}
export default Navbar;