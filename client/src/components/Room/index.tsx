import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { ReactElement } from 'react';

import { Player } from 'components/Player';
import { Table } from 'components/Table';
import { Room as RoomType } from 'types';

interface RoomProps {
  room: RoomType;
}

export function Room({ room }: RoomProps): ReactElement {
  const splitUsersCount = room.users.length / 2;

  const topUsersHalf = room.users.slice(0, splitUsersCount);
  const bottomUsersHalf = room.users.slice(splitUsersCount, room.users.length);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 'calc(100vh - 80px)',
        paddingBottom: '100px',
      }}
    >
      <Stack direction="row" spacing={2} sx={{ marginBottom: 2 }}>
        {topUsersHalf.map(({ id, username }) => (
          <Player key={id} username={username} />
        ))}
      </Stack>
      <Table />
      <Stack direction="row" spacing={2} sx={{ marginTop: 2 }}>
        {bottomUsersHalf.map(({ id, username }) => (
          <Player key={id} username={username} />
        ))}
      </Stack>
    </Box>
  );
}