'use server';

import { aiPortfolioReviewTool } from '@/ai/flows/ai-portfolio-review-tool';
import { portfolioContent } from '@/lib/portfolio-content';
import { z } from 'zod';

const schema = z.object({
  question: z.string().min(10, { message: 'Please ask a more detailed question (at least 10 characters).' }),
});

export type FormState = {
  message: string;
  feedback: string | null;
}

export async function getAiFeedback(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = schema.safeParse({
    question: formData.get('question'),
  });

  if (!validatedFields.success) {
    return {
      message: validatedFields.error.errors[0].message,
      feedback: null,
    };
  }

  try {
    const result = await aiPortfolioReviewTool({
      portfolioContent: portfolioContent,
      viewerQuestion: validatedFields.data.question,
    });
    return {
      message: 'success',
      feedback: result.feedback,
    };
  } catch (error) {
    console.error(error);
    return {
      message: 'An error occurred while getting feedback. Please try again.',
      feedback: null,
    };
  }
}
