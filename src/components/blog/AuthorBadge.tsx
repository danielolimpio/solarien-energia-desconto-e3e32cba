import { Link } from "react-router-dom";
import { author as defaultAuthor } from "@/data/author";

const AuthorBadge = ({
  author = defaultAuthor,
  date,
  readingTime,
}: {
  author?: typeof defaultAuthor;
  date?: string;
  readingTime?: string;
}) => {
  const formatted = date
    ? new Date(date).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    : null;

  return (
    <div className="flex items-center gap-3">
      <Link to="/sobre" className="flex-shrink-0">
        <img
          src={author.photo}
          alt={author.name}
          className="w-11 h-11 rounded-full object-cover border-2 border-primary/30"
        />
      </Link>
      <div className="text-sm">
        <Link
          to="/sobre"
          className="font-semibold text-foreground hover:text-primary transition-colors"
        >
          {author.name}
        </Link>
        <div className="text-muted-foreground text-xs">
          {formatted}
          {formatted && readingTime ? " · " : ""}
          {readingTime}
        </div>
      </div>
    </div>
  );
};

export default AuthorBadge;
