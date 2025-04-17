interface WorkspaceIdPageProps {
	params: {
		workspaceId: string;
	};
}

const WorkspaceIdPage = ({ params }: WorkspaceIdPageProps) => {
	return (
		<div>
			<h1>This is the workspace page of the id {params.workspaceId}</h1>
		</div>
	);
};

export default WorkspaceIdPage;
