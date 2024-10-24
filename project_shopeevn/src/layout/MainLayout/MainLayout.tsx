import Footer from "../../components/Footer";
import Header from "../../components/Header/Header";
import Banner from "../../pages/Banner";

interface Props {
  children?: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <div>
      <Header />
      {/* <Banner /> */}
      {children}
      <Footer />
    </div>
  );
}
