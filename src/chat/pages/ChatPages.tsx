import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Copy,
  Download,
  ThumbsUp,
  ThumbsDown,
  Send,
  MessageSquare,
} from 'lucide-react';
import { useParams } from 'react-router';
import { getClientMessages, sendMessage } from '@/fakeData/fakeData';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { ChatSkeleton } from '../components/ChatSkeleton';
import { Message } from '../interfaces/chat.interfaces';

export default function ChatPages() {
  const { clientId = '' } = useParams();

  const queryClient = useQueryClient();

  const [input, setInput] = useState('');
  const { data: messages = [], isLoading } = useQuery({
    queryKey: ['messages', clientId],
    queryFn: () => getClientMessages(clientId),
  });

  const { mutate: sendMessageMutation } = useMutation({
    mutationFn: sendMessage,
    onSuccess: (newMessage) => {
      queryClient.setQueryData(
        ['messages', clientId],
        (oldMessages: Message[]) => [...oldMessages, newMessage]
      );
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    sendMessageMutation({
      clientId: clientId ?? '',
      content: input,
      createdAt: new Date(),
      sender: 'client',
    });

    setInput('');
  };

  if (isLoading) {
    return <ChatSkeleton />;
  }

  return (
    <div className="flex-1 flex flex-col">
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div key={index} className="w-full">
              {message.sender === 'agent' ? (
                // Agent message - left aligned
                <div className="flex gap-2 max-w-[80%]">
                  <div className="h-8 w-8 rounded-full bg-primary flex-shrink-0" />
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">NexTalk</span>
                      <span className="text-sm text-muted-foreground">
                        {message.createdAt.toLocaleString()}
                      </span>
                    </div>
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <p className="text-sm whitespace-pre-wrap">
                        {message.content}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <ThumbsUp className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <ThumbsDown className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                // User message - right aligned
                <div className="flex flex-col items-end">
                  <div className="text-right mb-1">
                    <span className="text-sm font-medium mr-2">G5</span>
                    <span className="text-sm text-muted-foreground">
                      {message.timestamp}
                    </span>
                  </div>
                  <div className="bg-black text-white p-3 rounded-lg max-w-[80%]">
                    <p className="text-sm whitespace-pre-wrap">
                      {message.content}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </ScrollArea>

      {messages.length === 0 && (
        <div className="flex items-center justify-center h-[calc(100vh-200px)]">
          <div className="text-center space-y-2">
            <MessageSquare className="h-8 w-8 mx-auto text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              There are no messages in this chat.
            </p>
          </div>
        </div>
      )}
      <div className="p-4 border-t">
        <form onSubmit={handleSubmit}>
          <div className="flex items-center gap-2">
            <Textarea
              placeholder="Type a message as a customer"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="min-h-[44px] h-[44px] resize-none py-3"
            />
            <Button className="h-[44px] px-4 flex items-center gap-2">
              <Send className="h-4 w-4" />
              <span>Send</span>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
