import { useUser } from "@clerk/nextjs";
import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

const UserAvatar = () => {
    const { user} = useUser();

    return (
        <Avatar className="">
            <AvatarImage src={user?.imageUrl} />
            <AvatarFallback>
                {user?.firstName && user?.firstName.charAt(0)}
                {user?.lastName && user?.lastName.charAt(0)}
            </AvatarFallback>
        </Avatar>
    );
};

export default UserAvatar;

