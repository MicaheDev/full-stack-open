import { TouchableOpacity } from "react-native";
import { RepositoryNode } from "@models";
import { useNavigate } from "react-router-native";
import { RepositoryCard } from "@components";

export default function RepositoryTouchableCard(item: RepositoryNode) {
  const navigate = useNavigate();

  return (
    <TouchableOpacity
      onPress={() => {
        navigate(item.id);
      }}
    >
      <RepositoryCard {...item} />
    </TouchableOpacity>
  );
}
