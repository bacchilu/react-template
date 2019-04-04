#!/usr/bin/env python
# -*- coding: utf-8 -*-

'''
rm -rf node_modules/
mv package-lock.json /tmp
npm install
npm install webpack webpack-cli --save-dev
npm install @babel/core babel-loader @babel/preset-env --save-dev
npm install react react-dom --save
npm install @babel/preset-react --save-dev
npm run deploy
'''

import os
import json


if __name__ == '__main__':
    os.system('rm -rf node_modules/')
    os.system('mv package-lock.json /tmp')

    with open('package.json') as fp:
        d = json.loads(fp.read())
    for dep in d['devDependencies']:
        os.system('npm install %s@latest --save-dev' % dep)
    for dep in d['dependencies']:
        os.system('npm install %s@latest --save' % dep)

    os.system('npm run deploy')
