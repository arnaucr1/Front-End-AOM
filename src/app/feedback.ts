export class Feedback {
    feedbackID:number = 0;
    vote:number = 0;
    description:string = "";
    userID:number = 0;

    constructor(feedbackID:number, vote:number, description:string, userID:number) {
        this.feedbackID = feedbackID;
        this.vote = vote;
        this.description = description;
        this.userID = userID;
    }
}