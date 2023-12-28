type RockPaperScissors = "👊🏻" | "🖐🏾" | "✌🏽";

type YouWin = ["👊🏻", "✌🏽"] | ["✌🏽", "🖐🏾"] | ["🖐🏾", "👊🏻"];

type WhoWins<
	Opponent extends RockPaperScissors,
	You extends RockPaperScissors,
> = You extends Opponent ? "draw" : [You, Opponent] extends YouWin ? "win" : "lose";
