export interface Todo {
	text: string;
	id: number;
	isFinished: boolean;
}

export type FilterType = "all" | "finished" | "unfinished";