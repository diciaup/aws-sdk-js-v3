import { ApplicationNameRequiredException } from "./ApplicationNameRequiredException";
import { InvalidApplicationNameException } from "./InvalidApplicationNameException";
import { ApplicationDoesNotExistException } from "./ApplicationDoesNotExistException";
import { InvalidDeploymentGroupNameException } from "./InvalidDeploymentGroupNameException";
import { DeploymentGroupAlreadyExistsException } from "./DeploymentGroupAlreadyExistsException";
import { DeploymentGroupNameRequiredException } from "./DeploymentGroupNameRequiredException";
import { DeploymentGroupDoesNotExistException } from "./DeploymentGroupDoesNotExistException";
import { InvalidEC2TagException } from "./InvalidEC2TagException";
import { InvalidTagException } from "./InvalidTagException";
import { InvalidAutoScalingGroupException } from "./InvalidAutoScalingGroupException";
import { InvalidDeploymentConfigNameException } from "./InvalidDeploymentConfigNameException";
import { DeploymentConfigDoesNotExistException } from "./DeploymentConfigDoesNotExistException";
import { InvalidRoleException } from "./InvalidRoleException";
import { LifecycleHookLimitExceededException } from "./LifecycleHookLimitExceededException";
import { InvalidTriggerConfigException } from "./InvalidTriggerConfigException";
import { TriggerTargetsLimitExceededException } from "./TriggerTargetsLimitExceededException";
import { InvalidAlarmConfigException } from "./InvalidAlarmConfigException";
import { AlarmsLimitExceededException } from "./AlarmsLimitExceededException";
import { InvalidAutoRollbackConfigException } from "./InvalidAutoRollbackConfigException";
import { InvalidLoadBalancerInfoException } from "./InvalidLoadBalancerInfoException";
import { InvalidDeploymentStyleException } from "./InvalidDeploymentStyleException";
import { InvalidBlueGreenDeploymentConfigurationException } from "./InvalidBlueGreenDeploymentConfigurationException";
import { InvalidEC2TagCombinationException } from "./InvalidEC2TagCombinationException";
import { InvalidOnPremisesTagCombinationException } from "./InvalidOnPremisesTagCombinationException";
import { TagSetListLimitExceededException } from "./TagSetListLimitExceededException";
import { InvalidInputException } from "./InvalidInputException";
import { ThrottlingException } from "./ThrottlingException";
import { InvalidECSServiceException } from "./InvalidECSServiceException";
import { InvalidTargetGroupPairException } from "./InvalidTargetGroupPairException";
import { ECSServiceMappingLimitExceededException } from "./ECSServiceMappingLimitExceededException";
export type UpdateDeploymentGroupExceptionsUnion =
  | ApplicationNameRequiredException
  | InvalidApplicationNameException
  | ApplicationDoesNotExistException
  | InvalidDeploymentGroupNameException
  | DeploymentGroupAlreadyExistsException
  | DeploymentGroupNameRequiredException
  | DeploymentGroupDoesNotExistException
  | InvalidEC2TagException
  | InvalidTagException
  | InvalidAutoScalingGroupException
  | InvalidDeploymentConfigNameException
  | DeploymentConfigDoesNotExistException
  | InvalidRoleException
  | LifecycleHookLimitExceededException
  | InvalidTriggerConfigException
  | TriggerTargetsLimitExceededException
  | InvalidAlarmConfigException
  | AlarmsLimitExceededException
  | InvalidAutoRollbackConfigException
  | InvalidLoadBalancerInfoException
  | InvalidDeploymentStyleException
  | InvalidBlueGreenDeploymentConfigurationException
  | InvalidEC2TagCombinationException
  | InvalidOnPremisesTagCombinationException
  | TagSetListLimitExceededException
  | InvalidInputException
  | ThrottlingException
  | InvalidECSServiceException
  | InvalidTargetGroupPairException
  | ECSServiceMappingLimitExceededException;
