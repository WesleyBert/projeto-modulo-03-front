import { TourismCard } from "../../components/TourismCard";
import disney from "../../assets/disney.jpg";
import dubai from "../../assets/dubai-1.jpg";
import franca from "../../assets/turismo.frança.jpg";
import portugal from "../../assets/hotelportugal.jpg";
import washington from "../../assets/washington.jpg";
import passeioJeep from "../../assets/passeio-jeep.png";
import hotelPortugal from "../../assets/hotelPortugal2.jpg";
import serraNegra from "../../assets/serraNegra.jpg";
import './styles.css'
import { Header } from "../../components/Header";

export function Promotion() {
  return (
    <>
      <Header />
      <div className="promotion">
        <TourismCard title="PARQUES DA DISNEY" subTitle="Orlando" description="Apartir de" value="R$ 2.800" photo={disney} />

        <TourismCard title="Passeio de" subTitle="helicóptero" description="Apartir de" value="R$ 1.800" photo={dubai} />

        <TourismCard title="Passeio de" subTitle="Navio" description="Apartir de" value="R$ 3.800" photo={franca} />

        <TourismCard title="Hoteis em" subTitle="Portugal" description="Apartir de" value="R$ 3.800" photo={portugal} />

        <TourismCard title="Hoteis em" subTitle="washington" description="Apartir de" value="R$ 2.470" photo={washington} />

        <TourismCard title="Passeio de" subTitle="Buggy" description="Apartir de" value="2.470" photo={passeioJeep} />

        <TourismCard title="Hoteis em" subTitle="Portugal" description="Apartir de" value="R$ 2.300" photo={hotelPortugal} />

        <TourismCard title="Conheça" subTitle="Serra negra" description="Apartir de" value="R$ 2.800" photo={serraNegra} />

      </div>
    </>
  );
}
