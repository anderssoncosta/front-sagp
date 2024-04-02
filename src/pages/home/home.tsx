import { Card, CardContent } from "@/components/ui/card";

import imgHeader from "../../assets/img_main.png";
import Icon from "@/assets/icon";

const Home = () => {
  const date = new Date().toLocaleDateString();

  return (
    <div>
      <div className="p-4">
        <Card className="w-full">
          <CardContent className="flex justify-between p-0">
            <div className="flex flex-col justify-around p-4">
              <p className="font-medium text-">{date}</p>
              <h1 className="text-2xl"> Seja bem vindo(a ), Dra. Tarcianne!</h1>
            </div>

            <div className="">
              <img src={imgHeader} width={200} alt="Imagem" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="p-4 grid grid-cols-1 gap-2 lg:grid-cols-3">
        <Card className="">
          <CardContent className="flex flex-col items-center gap-1 justify-center p-4">
            <Icon name="UserCheck" color="#3b85f6" />
            <p className="font-semibold">30</p>
            <span>Atendidos</span>
          </CardContent>
        </Card>
        <Card className="">
          <CardContent className="flex flex-col items-center gap-1 justify-center p-4">
            <Icon name="CalendarCheck2" color="#3b85f6" />
            <p className="font-semibold">30</p>
            <span>Agendados</span>
          </CardContent>
        </Card>
        <Card className="">
          <CardContent className="flex flex-col items-center gap-1 justify-center p-4">
            <Icon name="UserPlus" color="#3b85f6" />
            <p className="font-semibold">150</p>
            <span>Cadastrados</span>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
export default Home;
