import { Message } from "@/model/User";

export interface ApiResponse {
  sucess: boolean;
  message: string;
  isAcceptingMessages?: boolean;
  messages?: Array<Message>;
}
