import dbConnect from "@/lib/dbConnect";
import UserModel, { Message } from "@/model/User";

export async function POST(request: Request) {
  await dbConnect();
  const { username, content } = await request.json();
  try {
    const user = await UserModel.findOne({ username }).exec();
    if (!user) {
      return Response.json(
        {
          sucess: false,
          message: "User Not Found",
        },
        { status: 404 }
      );
    }
    //check is user accepting messages
    if (!user.isAcceptingMessage) {
      return Response.json(
        {
          sucess: false,
          message: "User is not accepting messages",
        },
        { status: 403 }
      );
    }
    const newMessage = {
      content,
      createdAt: new Date(),
    };
    user.messages.push(newMessage as Message);
    await user.save();
    return Response.json(
      {
        sucess: true,
        message: "Message sent sucessfully",
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.log("error while sending messages", error.message);
    return Response.json(
      {
        sucess: false,
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
}
