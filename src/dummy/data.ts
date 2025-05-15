import type {TFriend} from '@/types/Models.ts'

export const friends: TFriend[] = [
    {
        id: 0,
        name: 'test',
        avatar: 'https://i.pravatar.cc/150?img=1',
    },
    {
        id: 1,
        name: 'test',
        avatar: 'https://i.pravatar.cc/150?img=2',
    },
    {
        id: 2,
        name: 'test',
        avatar: 'https://i.pravatar.cc/150?img=3',
    },
    {
        id: 3,
        name: 'test',
        avatar: 'https://i.pravatar.cc/150?img=4',
    },
    {
        id: 4,
        name: 'test',
        avatar: 'https://i.pravatar.cc/150?img=5',
    },
    {
        id: 5,
        name: 'test',
        avatar: 'https://i.pravatar.cc/150?img=6',
    },
]

export const relations = [
    { from: 'id1', to: 'id2', type: 'друг' },
    { from: 'id3', to: 'id4', type: 'влюблён' }
];