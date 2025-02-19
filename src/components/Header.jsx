import Button from "./Button";

function Header({header}){
    return(
        <header className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <img src={header.logo} alt="image-error" width={150}/>
             
            <span className="ml-3 text-xl">pizza hut</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-white">Home</a>
            <a className="mr-5 hover:text-white">Insert</a>
            <a className="mr-5 hover:text-white">about</a>
            <a className="mr-5 hover:text-white">contact us</a>
          </nav>
          <Button lable={"login"}/>
        </div>
      </header>
    );
}
export default Header;