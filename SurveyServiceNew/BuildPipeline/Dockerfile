FROM openjdk:8-jre-alpine
RUN mkdir -p /usr/local/Application
COPY target/*.jar /usr/local/IssueService/
WORKDIR /usr/local/IssueService
ENTRYPOINT ["java", "-jar", "IssueService.jar"]
