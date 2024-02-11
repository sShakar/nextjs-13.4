import Link from 'next/link';
import { prisma } from '@/db';
import TodoItem from '@/components/TodoItem';

export default async function HomePage() {
	const todos = await prisma.todo.findMany();

	return (
		<>
			<header className="flex justify-between items-center mb-4">
				<h1 className="text-2xl">Todos</h1>
				<Link
					href="/new"
					className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
				>
					New
				</Link>
			</header>
			<ul className="pl-4">
				{todos.map(todo => (
					<TodoItem key={todo.id} {...todo} />
				))}
			</ul>
		</>
	);
}
