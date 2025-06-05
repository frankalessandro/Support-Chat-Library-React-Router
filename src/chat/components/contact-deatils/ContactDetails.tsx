import { getClient } from "@/fakeData/fakeData";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { NoContactSelected } from "../NoContactSelected";
import { ContactInfoSkeleton } from "./ContactInfoSkeleton";
import { ContactInfo } from "./ContactInfo";

export const ContactDetails = () => {
  const { clientId } = useParams();

  const { data: client, isLoading } = useQuery({
    queryKey: ["client", clientId],
    queryFn: () => getClient(clientId ?? ""),
    enabled: !!clientId,
  });

  if (isLoading && !client) {
    return <ContactInfoSkeleton />;
  }

  if (!client) {
    return <NoContactSelected />;
  }

  return <ContactInfo client={client} />;
};
