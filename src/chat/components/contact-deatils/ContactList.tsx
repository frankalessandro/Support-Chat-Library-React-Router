import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getClients } from "@/fakeData/fakeData";
import { useQuery } from "@tanstack/react-query";
import { NavLink, useParams } from "react-router";
import { ContactInfoSkeleton } from "./ContactInfoSkeleton";

export const ContactList = () => {
  const { data: clients, isLoading } = useQuery({
    queryKey: ["clients"],
    queryFn: () => getClients(),
    staleTime: 60 * 60 * 1000,
  });

  const { clientId } = useParams();

  return (
    <ScrollArea className="h-[calc(100vh-64px)]">
      <div className="space-y-4 p-4">
        <div className="space-y-1">
          <h3 className="px-2 text-sm font-semibold">Contacts</h3>
          <div className="space-y-1">
            {isLoading && (
              <div className="animate-pulse space-y-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-5 w-full rounded-sm bg-gray-100" />
                ))}
              </div>
            )}

            {clients?.map((client) => (
              <NavLink
                to={`/chat/${client.id}`}
                className={({ isActive }) =>
                  `w-full justify-start flex items-center rounded-sm p-2 transition-all duration-100 ${
                    isActive
                      ? "bg-gradient-to-r from-gray-100 to-gray-200 font-semibold shadow-sm border-l-4 border-green-500 pl-[calc(0.5rem-2px)]"
                      : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                  }`
                }
              >
                <div
                  className={`h-6 w-6 rounded-full mr-2 flex-shrink-0 flex items-center justify-center text-xs transition-all duration-100 ${
                    client.id === clientId 
                    ? "text-white bg-green-500 shadow-sm" 
                    : "text-gray-500 bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  {client.name.charAt(0).toUpperCase()}
                  {client.name.charAt(1)}
                </div>
                <span className={`transition-colors duration-100 ${client.id === clientId ? "text-gray-900" : "text-gray-500"}`}>
                  {client.name}
                </span>
              </NavLink>
            ))}
          </div>
        </div>
        <div className="pt-4 border-t mt-4">
          <h3 className="px-2 text-sm font-semibold mb-1">Recent</h3>
          <Button variant="ghost" className="w-full justify-start">
            <div className="h-6 w-6 rounded-full bg-gray-500 mr-2 flex-shrink-0 flex items-center justify-center text-white text-xs">
              TM
            </div>
            Thomas Miller
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <div className="h-6 w-6 rounded-full bg-red-500 mr-2 flex-shrink-0 flex items-center justify-center text-white text-xs">
              SB
            </div>
            Sarah Brown
          </Button>
        </div>
      </div>
    </ScrollArea>
  );
};
