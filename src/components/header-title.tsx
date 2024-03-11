import { Card, CardContent } from "./ui/card";

interface HeaderTitleProps {
  title: string;
}

const HeaderTitle = ({ title }: HeaderTitleProps) => {
  return (
    <div className="mb-4">
      <Card className="bg-primary flex items-center">
        <CardContent className="text-primary-foreground flex items-center justify-center p-2">
          <h1 className="text-3xl">{title}</h1>
        </CardContent>
      </Card>
    </div>
  );
};
export default HeaderTitle;
