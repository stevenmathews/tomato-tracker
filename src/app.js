'use strict'

import './style/main.styl'
import {run} from '@cycle/core'
import main from './main'
import drivers from './drivers'

run(main, drivers)
