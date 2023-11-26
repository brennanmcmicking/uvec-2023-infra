#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { SiteStack } from "../lib/site-stack";

const app = new cdk.App();
new SiteStack(app, "LeafSucc", {
  env: { account: "446708209687", region: "us-east-1" },
});
