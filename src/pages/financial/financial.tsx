import HeaderTitle from "@/components/header-title";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { DataTableDemo } from "./financial-table";

const Financial = () => {
  return (
    <div className="p-4">
      <div>
        <HeaderTitle title="Financeiro" />
      </div>
      <div className="w-full flex flex-col gap-2 lg:flex-row">
        <Card className="w-full py-2 ">
          <CardContent className="flex flex-col items-center">
            <h1>Resultado previsto de fechamento do mês:</h1>
            <p className="text-emerald-500 text-2xl">R$ 10.000,00</p>
          </CardContent>
          <CardContent className="flex justify-around">
            <div>
              <h1>Recebimentos:</h1>
              <p className="text-emerald-500">R$ 15.000,00</p>
            </div>
            <div>
              <h1>Despesas:</h1>
              <p className="text-red-500">R$ 5.000,00</p>
            </div>
          </CardContent>
        </Card>
        <Card className="w-full py-2 flex flex-col items-center justify-center">
          <CardHeader className="font-bold">Saldo Total: </CardHeader>
          <CardContent className="flex flex-col ">
            <p className="text-emerald-500 text-3xl">R$ 10.000,00</p>
          </CardContent>
        </Card>
      </div>
      <DataTableDemo/>
    </div>
  );
};
export default Financial;
