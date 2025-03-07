import { Task } from "./Task";

// The component story in Component Story Format (CSF)
export default {
    title: "Task",
    component: Task,
    argTypes: {
        onPinTask: { action: 'onPinTask' },
        onArchiveTask: { action: 'onArchiveTask' },
    }
};

// Child Stories
// Child Story 1 (Default)
export const Default = {
    args: {
        task: {
            id: '1',
            title: 'Test Task',
            state: 'TASK_INBOX',
        },
    },
};

// Child Story 2 (Pinned)
export const Pinned = {
    args: { task: { ...Default.args.task, state: 'TASK_PINNED' } },
};

// Child Story 3 (Archived)
export const Archived = {
    args: { task: { ...Default.args.task, state: 'TASK_ARCHIVED' } },
};