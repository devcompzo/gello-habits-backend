const relationHabitHabitLog = (dbInstance) => {
  const { habit } = dbInstance;
  const { habitLog } = dbInstance;

  habit.hasMany(habitLog, { foreignKey: 'habit_habitlog_id', as: 'logs' });
  habitLog.belongsTo(habit, {
    foreignKey: 'habit_habitlog_id',
    as: 'habit',
    targetKey: 'id',
  });
};

const relationUserHabit = (dbInstance) => {
  const { user } = dbInstance;
  const { habit } = dbInstance;

  user.hasMany(habit, { foreignKey: 'habit_user_id', as: 'habits' });
  habit.belongsTo(user, {
    foreignKey: 'habit_user_id',
    as: 'user',
    targetKey: 'id',
  });
};

const relationHabitPriorityReward = (dbInstance) => {
  const { priorityReward } = dbInstance;
  const { habit } = dbInstance;

  priorityReward.hasMany(habit, { foreignKey: 'habit_priorityreward_id', as: 'habits' });
  habit.belongsTo(priorityReward, {
    foreignKey: 'habit_priorityreward_id',
    as: 'reward',
    targetKey: 'id',
  });
};

const relationCharacterAccesory = (dbInstance) => {
  const { character } = dbInstance;
  const { accesory } = dbInstance;

  character.belongsTo(accesory, { foreignKey: 'neck', targetKey: 'id', as: 'neckAccesory' });
  character.belongsTo(accesory, { foreignKey: 'head', targetKey: 'id', as: 'headAccesory' });
  character.belongsTo(accesory, { foreignKey: 'hand', targetKey: 'id', as: 'handAccesory' });
  character.belongsTo(accesory, { foreignKey: 'hoodie', targetKey: 'id', as: 'hoodieAccesory' });

  /* accesory.hasMany(character, { foreignKey: 'neck_accesory_id', as: 'neck' });
  accesory.hasMany(character, { foreignKey: 'head_accesory_id', as: 'head' });
  accesory.hasMany(character, { foreignKey: 'hand_accesory_id', as: 'hand' });
  accesory.hasMany(character, { foreignKey: 'hoodie_accesory_id', as: 'hoodie' }); */
};

const relationUserCharacter = (dbInstance) => {
  const { user } = dbInstance;
  const { character } = dbInstance;

  user.hasOne(character, { foreignKey: 'user_id', as: 'character' });
  character.belongsTo(user, {
    foreignKey: 'user_id',
    as: 'user',
    targetKey: 'id',
  });
};

module.exports = (dbInstance) => {
  relationHabitHabitLog(dbInstance);
  relationUserHabit(dbInstance);
  relationCharacterAccesory(dbInstance);
  relationHabitPriorityReward(dbInstance);
  relationUserCharacter(dbInstance);
};
