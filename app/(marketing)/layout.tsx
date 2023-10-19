import { NavBar } from "./_components/Navbar";

const MarketingLayout = ({
  children,
}:{
  children: React.ReactNode
}) => {
  return ( 
    <div className="h-ful dark:bg-[#1f1f1f]">
      <NavBar />
      <main className="h-full pt-40">
        {children}
      </main>
    </div>
   );
}
 
export default MarketingLayout;