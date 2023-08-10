const commandTypes = ['nagivation', 'theme'] as const;
type CommandType = (typeof commandTypes)[number];

export type CommandCollection = {
  heading: string;
  type: CommandType;
  pathPrefix?: string;
  items: Array<CommandEntry>;
};

export type CommandEntry = {
  name: string;
  id: string;
};
