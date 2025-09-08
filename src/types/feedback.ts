export type FeedbackRequest = {
  name: string;
  message: string;
  rating: number;
};

export type FeedbackResponse = {
  id: string;
  name: string;
  message: string;
  datePosted: string;
  rating?: number;
};
