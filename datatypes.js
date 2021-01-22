/*

data DayDescription = {date:Date,
                         day_of_month::[1-31],
                         day_of_week:Int,
                         weekday_of_month::[0-5],
                         last_weekday_of_month::Bool,
                         last_day_of_month::Bool}

data GeneratorSlot = {slot_id: Id,
                      group_id: Id,
                      brief: String,
                      desc: String,
                      parent_code: ID,
                      lifetime: Seconds,
                      active:Boolean,
                      rounds: Int,
                      rounds_left:Int,
                      repeat: always|finite}

data UnixMs = Int //unix time in milliseconds
data Iso8601d = YYYY-MM-DD
data TriggerType = A|B|C|...|Z
data Trigger = {type::TriggerType, start_date::Iso8601d}
type GroupId = Int

data Repetition = Times Number | Always
//data TriggerSlot = {slot_id::Int,
                      trigger_group_id::Int,
                      start_date::Date,
                      interval::Int,
                      brief::String,
                      description::String,
                      parent_code::Int,
                      lifetime::Int,
                      active::Bool,
                      repeat::Repeatition,
                      timestamp::UnixMs}

data GroupedTriggerSlots = {<x::TriggerSlotType>:[Trigger]}

*/