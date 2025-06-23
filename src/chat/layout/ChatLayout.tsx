import { ContactList } from '../components/contact-deatils/ContactList';
import { Link, Outlet, useParams } from 'react-router';
import { ContactDetails } from '../components/contact-deatils/ContactDetails';
import { useQuery } from '@tanstack/react-query';
import { getClients } from '@/fakeData/fakeData';

export default function ChatLayout() {
  const { clientId } = useParams();
  const { data: clients } = useQuery({
    queryKey: ['clients'],
    queryFn: () => getClients(),
    staleTime: 60 * 60 * 1000,
  });

  const selectedClient = clients?.find((c) => c.id === clientId);

  return (
    <div className="flex h-full bg-background">
      {/* Sidebar */}
      <div className="w-64 border-r bg-muted/10">
        <div className="p-4 border-b">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-primary" />
            <Link to="/chat">
              <span className="font-semibold">Chat</span>
            </Link>
          </div>
        </div>
        <ContactList />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex">
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="h-14 border-b px-4 flex items-center justify-between">
            <div className="text-lg font-semibold">
              {selectedClient ? selectedClient.name : 'Selecciona un chat'}
            </div>
            <div className="flex items-center gap-2">
              {/* Puedes agregar acciones aquí si lo deseas */}
            </div>
          </header>
          <Outlet />
        </div>

        {/* Right Panel - Contact Details */}
        <div className="w-80 border-l">
          <div className="h-14 border-b px-4 flex items-center">
            <h2 className="font-medium">Contact details</h2>
          </div>
          <ContactDetails />
        </div>
      </div>
    </div>
  );
}
