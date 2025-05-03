
import { FC } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface NomineeDetailProps {
  name: string;
  yearsNominated: string[];
  reason: string;
  biography: string;
  imageUrl: string;
  works: string[];
}

const NomineeDetail: FC<NomineeDetailProps> = ({ 
  name, 
  yearsNominated, 
  reason, 
  biography, 
  imageUrl, 
  works 
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Подробнее</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">{name}</DialogTitle>
          <DialogDescription>
            Номинирован в {yearsNominated.join(", ")} г.
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-6 py-4">
          <div className="flex items-start space-x-6">
            <img 
              src={imageUrl} 
              alt={name} 
              className="object-cover w-40 h-40 rounded-md" 
            />
            <div>
              <h4 className="mb-2 font-medium">Почему не получил премию:</h4>
              <p className="text-muted-foreground">{reason}</p>
            </div>
          </div>
          
          <div>
            <h4 className="mb-2 font-medium">Биография</h4>
            <p className="text-sm text-muted-foreground">{biography}</p>
          </div>
          
          <div>
            <h4 className="mb-2 font-medium">Известные произведения</h4>
            <ul className="pl-5 text-sm list-disc text-muted-foreground">
              {works.map((work, index) => (
                <li key={index}>{work}</li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NomineeDetail;
