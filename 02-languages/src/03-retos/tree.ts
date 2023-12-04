/*
	cada nodo de un árbol debería tener un valor -> value
	puede tener hijos o no -> children?
	y utilizamos recursividad como en "flatten-array.ts" para ir bajando de profundidad -> ponemos el type TreeNode dentro de TreeNode
*/

type TreeNode<T> = {
	value: T;
	children?: TreeNode<T>[];
};

const stringTree: TreeNode<string> = {
	value: "root",
	children: [
		{
			value: "branch1",
			children: [{ value: "leaf1.1" }],
		},
		{
			value: "branch2",
			children: [
				{ value: "leaf2.1" },
				{ value: "leaf2.2" },
				{ value: "leaf2.3" },
			],
		},
		{
			value: "branch3",
			children: [{ value: "leaf3.1" }, { value: "leaf3.2" }],
		},
	],
};
