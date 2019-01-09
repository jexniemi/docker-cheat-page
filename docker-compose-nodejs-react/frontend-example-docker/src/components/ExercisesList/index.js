import React from 'react'

import ExerciseAmIRunning from './ExerciseAmIRunning'
import ExerciseBackendConnection from './ExerciseBackendConnection'
import ExerciseNginxSetup from './ExerciseNginxSetup'
import ExerciseRedisSetup from './ExerciseRedisSetup'
import ExerciseDBConnection from './ExerciseDBConnection'

const ExerciseList = () => (
    <div style={{ paddingTop: '1em' }}>
        <h3>Test connection</h3>
        <ExerciseBackendConnection exerciseNumber="1.7" />
        <hr />
    </div>
)

export default ExerciseList
