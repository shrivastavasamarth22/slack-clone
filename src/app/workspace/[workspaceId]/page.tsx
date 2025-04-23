"use client";

import { useWorkspaceId } from "@/hooks/use-workspace-id";
import { useGetWorkspace } from "@/features/workspaces/api/use-get-workspace";

const WorkspaceIdPage = () => {
	const workspaceId = useWorkspaceId();
	const { data, isLoading } = useGetWorkspace({ id: workspaceId });

	return (
		<div>
			<h1>Workspace Id Page</h1>
		</div>
	);
};

export default WorkspaceIdPage;
