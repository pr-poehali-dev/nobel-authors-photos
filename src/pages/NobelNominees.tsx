
import { FC } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface NomineeProps {
  name: string;
  yearsNominated: string[];
  reason: string;
  imageUrl: string;
}

const NomineeCard: FC<NomineeProps> = ({ name, yearsNominated, reason, imageUrl }) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative aspect-[4/3]">
        <img 
          src={imageUrl} 
          alt={name} 
          className="object-cover w-full h-full transition-transform duration-500 hover:scale-105" 
        />
      </div>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{name}</CardTitle>
        <CardDescription className="text-sm">
          Номинирован в {yearsNominated.join(", ")} г.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{reason}</p>
      </CardContent>
    </Card>
  );
};

const NobelNominees: FC = () => {
  const nominees: NomineeProps[] = [
    {
      name: "Лев Толстой",
      yearsNominated: ["1902", "1903", "1904", "1905", "1906"],
      reason: "Не получил премию из-за своих радикальных политических взглядов и критики церкви.",
      imageUrl: "https://images.unsplash.com/photo-1541280910158-c4e14f9c94a3?q=80&w=2069&auto=format&fit=crop"
    },
    {
      name: "Антон Чехов",
      yearsNominated: ["1902", "1903", "1904"],
      reason: "Рано умер (1904 г.), не успев получить премию, хотя был номинирован несколько раз.",
      imageUrl: "https://images.unsplash.com/photo-1544726982-a1cea8fc33c0?q=80&w=1974&auto=format&fit=crop"
    },
    {
      name: "Джеймс Джойс",
      yearsNominated: ["1937", "1939", "1940"],
      reason: "Его экспериментальный стиль и спорная репутация произведений отпугнули консервативный комитет премии.",
      imageUrl: "https://images.unsplash.com/photo-1558210834-473f430c09ac?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <div className="container py-10 mx-auto">
      <Helmet>
        <title>Писатели без Нобелевской премии | Литературный архив</title>
      </Helmet>
      
      <div className="mb-8">
        <Link to="/">
          <Button variant="ghost" className="gap-2">
            <Icon name="ChevronLeft" size={18} />
            Назад
          </Button>
        </Link>
      </div>
      
      <h1 className="mb-2 text-4xl font-bold tracking-tight">Писатели, не получившие Нобелевскую премию</h1>
      <p className="mb-10 text-muted-foreground">Выдающиеся литераторы, которые были номинированы, но так и не стали лауреатами</p>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {nominees.map((nominee, index) => (
          <NomineeCard key={index} {...nominee} />
        ))}
      </div>
    </div>
  );
};

export default NobelNominees;
