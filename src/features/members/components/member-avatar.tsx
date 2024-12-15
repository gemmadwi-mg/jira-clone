import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface MemberAvatarProps {
  name: string;
  className?: string;
  fallbackClassname?: string;
}

export const MemberAvatar = ({
  name,
  className,
  fallbackClassname,
}: MemberAvatarProps) => {
  return (
    <Avatar
      className={cn(
        "size-6 transition border border-neutral-300 rounded-fall",
        className
      )}
    >
      <AvatarFallback
        className={cn(
          "bg-neutral-200 font-medium text-neutral-500 flex items-center justify-center",
          fallbackClassname
        )}
      >
        {name.charAt(0).toUpperCase()}
      </AvatarFallback>
    </Avatar>
  );
};
