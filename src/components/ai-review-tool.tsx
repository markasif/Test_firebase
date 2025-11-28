"use client";

import { useEffect, useRef } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { Bot, Loader2, Send, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from '@/components/ui/sheet';
import { Textarea } from '@/components/ui/textarea';
import { getAiFeedback, type FormState } from '@/app/actions';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { useToast } from '@/hooks/use-toast';
import { ScrollArea } from './ui/scroll-area';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Getting Feedback...
        </>
      ) : (
        <>
          <Send className="mr-2 h-4 w-4" />
          Get Feedback
        </>
      )}
    </Button>
  );
}

export function AiReviewTool() {
  const initialState: FormState = {
    message: '',
    feedback: null,
  };
  const [state, formAction] = useFormState(getAiFeedback, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message && state.message !== 'success') {
      toast({
        title: 'Error',
        description: state.message,
        variant: 'destructive',
      });
    }
    if (state.message === 'success') {
      formRef.current?.reset();
    }
  }, [state, toast]);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="primary"
          size="icon"
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-50 animate-pulse"
        >
          <Bot className="h-7 w-7" />
          <span className="sr-only">AI Portfolio Review</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg flex flex-col">
        <SheetHeader>
          <SheetTitle>AI Portfolio Review</SheetTitle>
          <SheetDescription>
            Ask a specific question about my skills, projects, or experience and get an instant AI-powered response.
          </SheetDescription>
        </SheetHeader>
        <form action={formAction} ref={formRef} className="flex flex-col flex-grow">
          <div className="flex-grow space-y-4">
            <Textarea
              name="question"
              placeholder="e.g., 'Can you elaborate on the micro-frontend architecture project?'"
              className="min-h-[120px] text-base"
              required
            />
            {state.feedback && (
              <ScrollArea className="h-72 w-full">
                <Alert>
                  <Sparkles className="h-4 w-4" />
                  <AlertTitle>AI Feedback</AlertTitle>
                  <AlertDescription className="prose prose-sm dark:prose-invert">
                    {state.feedback}
                  </AlertDescription>
                </Alert>
              </ScrollArea>
            )}
          </div>
          <SheetFooter className='mt-4'>
            <SubmitButton />
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
}
