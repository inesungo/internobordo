import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface MatchCardProps {
  homeTeam: string;
  awayTeam: string;
  homeScore?: number;
  awayScore?: number;
  date: string;
  time: string;
  category: "Masculino" | "Femenino";
  status?: "Finalizado" | "En vivo" | "Próximo";
}

const MatchCard = ({
  homeTeam,
  awayTeam,
  homeScore,
  awayScore,
  date,
  time,
  category,
  status = "Próximo",
}: MatchCardProps) => {
  return (
    <Card className="p-4 md:p-4 hover:shadow-lg transition-all duration-300 border-border bg-card animate-scale-in">
      <div className="flex items-center justify-between mb-3 md:mb-4">
        <Badge variant={category === "Masculino" ? "default" : "secondary"} className="text-xs md:text-sm">
          {category}
        </Badge>
        <Badge
          variant={
            status === "En vivo"
              ? "destructive"
              : status === "Finalizado"
              ? "outline"
              : "outline"
          }
          className={
            status === "Próximo"
              ? "bg-slate-800 text-white border-slate-800 hover:bg-slate-700 text-xs md:text-sm"
              : "text-xs md:text-sm"
          }
        >
          {status}
        </Badge>
      </div>

      <div className="flex items-center justify-between gap-3 md:gap-4">
        <div className="flex-1 text-center">
          <p className="font-bold text-base md:text-lg text-foreground">{homeTeam}</p>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          {homeScore !== undefined && awayScore !== undefined ? (
            <>
              <div className="text-2xl md:text-3xl font-bold text-primary">{homeScore}</div>
              <div className="text-xl md:text-2xl text-muted-foreground">-</div>
              <div className="text-2xl md:text-3xl font-bold text-primary">{awayScore}</div>
            </>
          ) : (
            <div className="text-base md:text-lg font-medium text-muted-foreground">vs</div>
          )}
        </div>

        <div className="flex-1 text-center">
          <p className="font-bold text-base md:text-lg text-foreground">{awayTeam}</p>
        </div>
      </div>

      <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-border text-center">
        <p className="text-xs md:text-sm text-muted-foreground">
          {date} - {time}
        </p>
      </div>
    </Card>
  );
};

export default MatchCard;
