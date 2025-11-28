'use server';
/**
 * @fileOverview An AI-powered portfolio review tool.
 *
 * - aiPortfolioReviewTool - A function that provides personalized feedback on a portfolio.
 * - AiPortfolioReviewToolInput - The input type for the aiPortfolioReviewTool function.
 * - AiPortfolioReviewToolOutput - The return type for the aiPortfolioReviewTool function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiPortfolioReviewToolInputSchema = z.object({
  portfolioContent: z
    .string()
    .describe('The complete text content of the developer portfolio.'),
  viewerQuestion: z
    .string()
    .describe('A specific question from the portfolio viewer about the content.'),
});
export type AiPortfolioReviewToolInput = z.infer<typeof AiPortfolioReviewToolInputSchema>;

const AiPortfolioReviewToolOutputSchema = z.object({
  feedback: z
    .string()
    .describe(
      'Personalized feedback addressing the viewer question based on the portfolio content.'
    ),
});
export type AiPortfolioReviewToolOutput = z.infer<typeof AiPortfolioReviewToolOutputSchema>;

export async function aiPortfolioReviewTool(
  input: AiPortfolioReviewToolInput
): Promise<AiPortfolioReviewToolOutput> {
  return aiPortfolioReviewToolFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiPortfolioReviewToolPrompt',
  input: {schema: AiPortfolioReviewToolInputSchema},
  output: {schema: AiPortfolioReviewToolOutputSchema},
  prompt: `You are an AI-powered portfolio review tool. You will provide personalized feedback
to portfolio viewers based on their specific questions regarding the resume and projects.

Portfolio Content: {{{portfolioContent}}}

Viewer Question: {{{viewerQuestion}}}

Provide a detailed and helpful answer to the viewer's question, referencing specific parts
of the portfolio content where possible. Focus on clarity, relevance, and actionable suggestions.
`,
});

const aiPortfolioReviewToolFlow = ai.defineFlow(
  {
    name: 'aiPortfolioReviewToolFlow',
    inputSchema: AiPortfolioReviewToolInputSchema,
    outputSchema: AiPortfolioReviewToolOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
